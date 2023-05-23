import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const ShopByCategory = () => {
  const [subToys, setSubToys] = useState("");

  useEffect(() => {
    fetch("https://enlighten-play-server.vercel.app/insertedToys")
      .then((res) => res.json())
      .then((data) => {
        setSubToys(data);
      });
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-center text-purple-950 text-4xl mb-14">
        Shop by Category: {subToys.length}
      </h2>

      <div className="text-center">
        <Tabs>
          <TabList>
            <Tab>Science Kits</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Math Learning Toys</Tab>
          </TabList>
          <TabPanel>
            <Tab>
            <div className="flex">
                <div className="card w-96 mr-20 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[0]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[0]?.toyName}</h2>
                    <p>{subToys[0]?.subCategory}</p>
                    <p>{subToys[0]?.price}</p>
                    <p>{subToys[0]?.availableQuantity}</p>
                    <div className="card-actions">
                    <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[4]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[4]?.toyName}</h2>
                    <p>{subToys[4]?.subCategory}</p>
                    <p>{subToys[4]?.price}</p>
                    <p>{subToys[4]?.availableQuantity}</p>
                    <div className="card-actions">
                    <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </TabPanel>
          <TabPanel>
            <Tab>
            <div className="flex">
                <div className="card w-96 mr-20 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[3]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[3]?.toyName}</h2>
                    <p>{subToys[3]?.subCategory}</p>
                    <p>{subToys[3]?.price}</p>
                    <p>{subToys[3]?.availableQuantity}</p>
                    <div className="card-actions">
                    <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[7]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[7]?.toyName}</h2>
                    <p>{subToys[7]?.subCategory}</p>
                    <p>{subToys[7]?.price}</p>
                    <p>{subToys[7]?.availableQuantity}</p>
                    <div className="card-actions">
                    <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </TabPanel>
          <TabPanel>
            <Tab>
            <div className="flex">
                <div className="card w-96 mr-20 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[1]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[1]?.toyName}</h2>
                    <p>{subToys[1]?.subCategory}</p>
                    <p>{subToys[1]?.price}</p>
                    <p>{subToys[1]?.availableQuantity}</p>
                    <div className="card-actions">
                     
                      <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={subToys[6]?.picture}
                      alt="img"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{subToys[6]?.toyName}</h2>
                    <p>{subToys[6]?.subCategory}</p>
                    <p>{subToys[6]?.price}</p>
                    <p>{subToys[6]?.availableQuantity}</p>
                    <div className="card-actions">
                    <Link to={`/${subToys?._id}`}>
                        <button className="btn btn-outline-danger">
                        View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </TabPanel>
        </Tabs>
      </div>

   {/*   {
           subToys && subToys?.map((subToy)=>(
                <SubToy key={subToy._id} subToy={subToy}></SubToy>
              ))
          }  */}

      {/* <div className="text-center">
        <Tabs>
          <TabList>
            <Tab>Science Kits</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Math Learning Toys</Tab>
          </TabList>
          <TabPanel>
          {
           subToys && (subToys || [])?.map((subToy, index)=>(
                <SubToy key={index} subToy={subToy}>{subToy}</SubToy>
              ))
          }
      
          </TabPanel>
          <TabPanel>
          {
           subToys && (subToys || [])?.map((subToy, index)=>(
                <SubToy key={index} subToy={subToy}>{subToy}</SubToy>
              ))
          }
          </TabPanel>
          <TabPanel>
          {
           subToys && (subToys || [])?.map((subToy, index)=>(
                <SubToy key={index} subToy={subToy}>{subToy}</SubToy>
              ))
          }
          </TabPanel>
        </Tabs>
      </div> */}
    </div>
  );
};

export default ShopByCategory;
