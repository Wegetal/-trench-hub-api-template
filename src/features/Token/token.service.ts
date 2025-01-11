import { getMetadata } from "../../services/apis/helius";
import { getIPFSMetadata } from "../../services/apis/ipfs";
import { formatMC } from "../../shared";

export const getTokenData = async (token: string) => {
  const { content, token_info } = await getMetadata(token);
  // const price = await getPrice(token);
  const {
    extensions = {},
    description,
    ...metadata
  } = await getIPFSMetadata(content.json_uri);

  const mcap = formatMC(
    Number(token_info.supply) * Number(token_info.price_info.price_per_token)
  );

  return {
    ...metadata,
    ...extensions,
    description: description.replace(/(\r\n|\n|\r)/gm, ""),
    mcap,
  };
};
