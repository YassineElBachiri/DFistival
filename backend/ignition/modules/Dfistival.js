const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("DfModule", (m) => {
  const pct = 10;
  const owner = "0xe4476Ca098Fa209ea457c390BB24A8cfe90FCac4";

  const Dfistival = m.contract("Dfistival", {
    args: [pct,owner]
  });

  return { Dfistival };
});
