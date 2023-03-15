import type { NextPage } from "next";
import CompPositionsElements from "./comp-positions-elements";
import styles from "./comp-postions-holder.module.css";

const CompPostionsHolder: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.componentParent}>
          <CompPositionsElements bTCPERP="BTC-PERP" prop="$1,435.89" />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Size"
            prop="0.75 ($1,183.82)"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Avg Entry"
            prop="$1,435.89"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP={`Realized P&L`}
            prop="-$1.43 (-9.20%)"
            propColor="#e4364b"
          />
        </div>
        <div className={styles.componentParent}>
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Leverage"
            prop="19.61x"
            propColor="#00c9a5"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP={`Unrealized P&L`}
            prop="$1.43 (9.20%)"
            propColor="#00c9a5"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Liq Price"
            prop="$1,435.89"
            propColor="#fff"
          />
          <CompPositionsElements
            lONGDisplay="none"
            bTCPERP="Net Funding"
            prop="$1.43"
            propColor="#00c9a5"
          />
        </div>
      </div>
      <div className={styles.closePositionWrapper}>
        <div className={styles.closePosition}>Close Position</div>
      </div>
    </div>
  );
};

export default CompPostionsHolder;
