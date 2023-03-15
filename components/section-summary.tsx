import type { NextPage } from "next";
import styles from "./section-summary.module.css";

const SectionSummary: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.image12Parent}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>BTC-PERP Perpetual</div>
            <div className={styles.div}>$ 22,911</div>
          </div>
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>Index Price</div>
            <div className={styles.m1257m}>$22,907</div>
          </div>
          <div className={styles.image12Parent}>
            <img className={styles.frameIcon} alt="" src="/frame5.svg" />
            <div className={styles.btcPerpPerpetualParent}>
              <div className={styles.btcPerpPerpetual}>24h Volume</div>
              <div className={styles.m1257m}>$ 377,526,580</div>
            </div>
          </div>
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>24h Change</div>
            <div className={styles.div3}>0.36%</div>
          </div>
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>1H Funding Rate</div>
            <div className={styles.div4}>-0.001033%</div>
          </div>
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>Open Interest (L)</div>
            <div className={styles.m1257m}>$5.41M / $12.57M</div>
          </div>
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>Open Interest (S)</div>
            <div className={styles.m1257m}>$5.41M / $12.57M</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.image12Parent}>
          <img className={styles.frameIcon} alt="" src="/frame6.svg" />
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>sUSD - 1.01</div>
            <div className={styles.div5}>$ 6,580</div>
          </div>
        </div>
        <div className={styles.image12Parent}>
          <img className={styles.frameIcon} alt="" src="/frame7.svg" />
          <div className={styles.btcPerpPerpetualParent}>
            <div className={styles.btcPerpPerpetual}>OP - 2.52$</div>
            <div className={styles.div5}>23.31</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSummary;
