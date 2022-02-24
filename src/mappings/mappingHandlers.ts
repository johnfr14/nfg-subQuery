import { MoonbeamEvent, MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { ERC1155 } from "../types/models";
import { BigNumber, utils } from "ethers";

// Setup types from ABI
type TransferSingleArgs = [address, address, address, BigNumber, BigNumber] & { operator: string; from: string; to: string; id: BigNumber; value: BigNumber; };
type URIArgs = [string, BigNumber] & { value: string; id: BigNumber; }


export async function handleNfgTransfert(event: MoonbeamEvent<TransferSingleArgs>): Promise<void> {
    const {event: {data: [operator, from, to, id]}} = event;
    logger.info(event)
    const erc1155 = new ERC1155(utils.formaEther(id))
    
    // //Retrieve the record by its ID
    // const record = await StarterEntity.get(event.block.block.header.hash.toString());
    // record.field2 = account.toString();
    // //Big integer type Balance of a transfer event
    // record.field3 = (balance as Balance).toBigInt();
    await erc1155.save();
}

export async function handleNfgUri(event: URIArgs): Promise<void> {
    const {event: {data: [value, id]}} = event;
    logger.info(info)
    // //Retrieve the record by its ID
    // const record = await StarterEntity.get(event.block.block.header.hash.toString());
    // record.field2 = account.toString();
    // //Big integer type Balance of a transfer event
    // record.field3 = (balance as Balance).toBigInt();
    // await record.save();
}