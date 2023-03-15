import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./comp-positions-elements.module.css";

type CompPositionsElementsType = {
  bTCPERP?: string;
  prop?: string;

  /** Style props */
  lONGDisplay?: Property.Display;
  propColor?: Property.Color;
};

const CompPositionsElements: NextPage<CompPositionsElementsType> = ({
  lONGDisplay,
  bTCPERP,
  prop,
  propColor,
}) => {
  const lONGStyle: CSS.Properties = useMemo(() => {
    return {
      display: lONGDisplay,
    };
  }, [lONGDisplay]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.longParent}>
        <div className={styles.long} style={lONGStyle}>
          LONG
        </div>
        <div className={styles.btcPerp}>{bTCPERP}</div>
      </div>
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default CompPositionsElements;
