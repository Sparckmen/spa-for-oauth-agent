import { useEffect, useState } from "react";
import { SimpleData } from "../types/SimpleData";
import simpleService from "../services/simple.service";
import styles from "./SecuredPage.module.scss";
import { redirect } from "react-router";

const Secured = () => {
  const [simpleData, setSimpleData] = useState<SimpleData[] | void>([]);

  useEffect(() => {
    simpleService
      .getAll()
      .then((simpleDataResponse) => {
        setSimpleData(simpleDataResponse);
      });
  }, []);

  const simpleDataItems = simpleData?.map((item) => (
    <div className={styles.simpleDataItem}>
      <div>Id: {item.id}</div>
      <div>Content: {item.content}</div>
    </div>
  ));

  return (
    <div>
      <h1>Welcome to the Secured Page</h1>
      <div className={styles.simpleDataList}>{simpleDataItems}</div>
    </div>
  );
};

export default Secured;
