import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  id: 'symbolNotERC20',
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: '`symbol()` is not a part of the ERC-20 standard',
  description:
    "The `symbol()` function is not a part of the [ERC-20 standard](https://eips.ethereum.org/EIPS/eip-20), and was added later as an [optional extension](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Metadata.sol). As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.",
 
  regex: /\.symbol\(\)/gi,
};

export default issue;
