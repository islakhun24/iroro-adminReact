/* eslint-disable no-unused-vars */
import { Button, Checkbox, Image, Input } from "antd";
import React from "react";
import { imProduct } from "assets/images/png";
import { Table, Radio, Divider } from "antd";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Question = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-base font-bold">Assistant Listing</h1>
      <div className="flex-col p-4 space-y-4 rounded-lg shadow-md">
        <div className="flex flex-row items-center justify-center space-x-4 rounded-md">
          <div className="flex w-1/3 h-10">
            <Input placeholder="Search..." className="w-full rounded-l-md" />
            <button className="flex items-center justify-center flex-none object-center px-3 bg-blue-800 cursor-pointer rounded-r-md ">
              <SearchOutlined className="text-white" />
            </button>
          </div>
          <div className="flex flex-col items-start justify-start flex-grow space-y-2">
            <h1 className="font-normal text-md">Fileter</h1>
            <div className="flex flex-row flex-1 space-x-4">
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">New case</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Case closed</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Responded</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Suggestions</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Shipping</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Item</label>
              </div>
            </div>
            <div className="flex flex-row flex-1 space-x-4">
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Event</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Purchase and Payment</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Accounts</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Refund</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Discussion</label>
              </div>
              <div className="flex flex-row flex-1 space-x-1">
                <Checkbox />
                <label htmlFor="">Ask Us Here</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap space-y-1">
            <button className=" w-32 flex-1 py-1.5 px-4 text-sm text-white font-normal bg-blue-800 rounded-md">
              CASE CLOSE
            </button>
            <button className=" py-1.5 px-4 text-sm text-white font-normal bg-blue-800 rounded-md">
              ARCHIVE
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-wrap">
            <div className="flex flex-col">
              {data.map((val, index) => {
                return (
                  <div className="flex mt-2 space-x-2 felx-row">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="w-8">{index + 1}</div>
                    <div className="flex flex-col items-center justify-center p-4 bg-blue-800">
                      <div className="items-center justify-center w-16 text-base font-medium text-center text-white">
                        NEW CASE
                      </div>
                      <div className="flex flex-col items-center justify-center mt-4 text-white">
                        <p>No.</p>
                        <p> 23444</p>
                      </div>
                    </div>
                    <div className="flex flex-col px-2 py-4 space-y-2 w-80">
                      <div className="flex items-end justify-end">
                        <Button className="text-xs text-white bg-blue-800 rounded-md">
                          Purchase and Payment
                        </Button>
                      </div>
                      <div className="text-xs font-bold">
                        NO TRANSACTION : ELE1002602210122 ID{" "}
                      </div>
                      <div className="text-xs font-medium">
                        E-MAIL : yamada62@gmael
                      </div>
                      <div className="text-sm font-bold">
                        Please review lorem ipsum dolor sit...
                      </div>
                      <div className="text-xs font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor lobortis leo, sit amet dapibus erat
                        porta vitae. Vestibulum posuere id urna ac imperdiet.
                        Nam
                      </div>
                      <div className="flex items-end justify-end text-xs font-light text-gray-500 text-end">
                        Dec 08, 2020 17:26
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-grow "></div>
        </div>
      </div>
    </div>
  );
};

export default Question;
