import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-purple-950 text-4xl mb-14">
        Shop by Category
      </h2>
      <div className="text-center">
        <Tabs>
          <Tab>Educational and Learning Toys</Tab>
          <TabList>
            <Tab>Science Kits</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Math Learning Toys</Tab>
          </TabList>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
