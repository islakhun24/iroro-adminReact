/* eslint-disable no-unused-vars */
import { Image, Input } from "antd";
import React from "react";
import { imProduct } from "assets/images/png";
import { Table, Radio, Divider } from "antd";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Inventory = (props) => {
  const [selectionType, setSelectionType] = React.useState("checkbox");
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      render: (text) => {
        return <span className="absolute text-xs top-4">{text}</span>;
      },
    },
    {
      title: "Transaction No.",
      dataIndex: "transaksion_no",
      render: (text) => {
        return (
          <span className="absolute text-xs font-medium top-4">{text}</span>
        );
      },
    },
    {
      title: "Listing Status",
      dataIndex: "listing_status",
      render: (item) => {
        return (
          <div className="flex flex-col items-center justify-center space-y-1">
            {item.type === "SOLD" ? (
              <div className="px-8 py-0 text-xs font-medium text-white bg-blue-800 rounded-md">
                {item.type}
              </div>
            ) : null}
            {item.type === "POSTING" ? (
              <div className="px-5 py-0 text-xs font-medium text-blue-900 border-2 border-blue-800 rounded-md bg-white-800">
                {item.type}
              </div>
            ) : null}
            {item.type === "SOLD" ? (
              <>
                <label className="text-xs text-gray-500">Registered</label>
                <p className="text-xs text-gray-500">{item.date1}</p>
                <label className="mt-1 text-xs text-gray-500">Sold Out</label>
                <p className="text-xs text-gray-500">{item.date2}</p>
              </>
            ) : null}
            {item.type === "POSTING" || item.type === "DELETED" ? (
              <>
                <label className="text-xs text-gray-500">Registered</label>
                <p className="text-xs text-gray-500">{item.date1}</p>
              </>
            ) : null}
          </div>
        );
      },
    },
    {
      title: "Assistant",
      dataIndex: "assistant",
      render: (item) => {
        return (
          <div className="absolute flex flex-col items-center justify-center space-y-1 top-4">
            <div className="px-8 py-0 text-xs font-bold text-black">
              {item.username}
            </div>
            <Link
              to="/assistant"
              className="text-xs font-medium text-gray-400 underline"
            >
              view detail
            </Link>
          </div>
        );
      },
    },
    {
      title: "Item",
      dataIndex: "item",
      render: (item) => {
        return (
          <div className="flex flex-row space-x-2 w-52">
            <div className="relative">
              <Image
                className="absolute top-0"
                src={item.image}
                height="70px"
                width="70px"
              />
              <div className="absolute flex items-center justify-center w-12 h-3 font-medium text-white bg-red-500 left-1 top-2 rounded-r-md">
                <label
                  style={{
                    fontSize: 6,
                  }}
                >
                  {item.label}
                </label>
              </div>
            </div>
            <p className="text-xs">{item.desc}</p>
          </div>
        );
      },
    },
    {
      title: "Listing Type",
      dataIndex: "listing_type",
      render: (text) => {
        return <span className="absolute text-xs top-4">{text}</span>;
      },
    },
  ];
  const data = [
    {
      key: "1",
      no: "1.",
      transaksion_no: "ELE1002602210122 ID ",
      listing_status: {
        type: "SOLD",
        date1: "Dec 08, 2020 17:26",
        date2: "Mar 30, 2021 17:26",
      },
      assistant: {
        id_user: "1",
        username: "suda_masaki",
      },
      item: {
        label: "URGENT",
        image: imProduct,
        desc: "Nintendo Switch with Blue (Special Limited Edition) - HAC-001(-01)...",
      },
      listing_type: "Offer Hurry Request",
    },
    {
      key: "2",
      no: "2.",
      transaksion_no: "ELE1002602210122 US ",
      listing_status: {
        type: "POSTING",
        date1: "Dec 08, 2020 17:26",
        date2: "-",
      },
      assistant: {
        id_user: "1",
        username: "suda_masaki",
      },
      item: {
        label: "AUCTION",
        image: imProduct,
        desc: "Nintendo Switch with Blue (Special Limited Edition) - HAC-001(-01)...",
      },
      listing_type: "Auction",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-base font-bold">Assistant Listing</h1>
      <div className="flex-col p-4 space-y-4 rounded-lg shadow-md">
        <div className="flex flex-row space-x-2 rounded-md">
          <div className="flex justify-end flex-grow">
            <Input placeholder="Search..." className="w-2/5 rounded-l-md" />
            <button className="flex flex-wrap items-center justify-center object-center px-3 bg-blue-800 cursor-pointer rounded-r-md ">
              <SearchOutlined className="text-white" />
            </button>
          </div>
          <button className="flex items-center justify-center px-4 bg-white rounded-md focus-within:text-white hover:text-white hover:bg-blue-800">
            <FilterOutlined className="text-current text-gray-600 fill-current" />
          </button>
        </div>
        <div className="flex flex-row space-x-2">
          <button className="flex-1 py-1.5 text-sm text-white font-medium bg-blue-800 rounded-md">
            VIEW LISTING PAGE
          </button>
          <button className="flex-1 py-1.5 text-sm text-white font-medium bg-blue-800 rounded-md">
            REMOVE
          </button>
          <button className="flex-1 py-1.5 text-sm text-white font-medium bg-blue-800 rounded-md">
            END TRANSACTION
          </button>
          <button className="flex-1 py-1.5 text-sm text-white font-medium bg-blue-800 rounded-md">
            CREATE A DISCUSSION
          </button>
          <button className="flex-1 py-1.5 text-sm text-white font-medium bg-blue-800 rounded-md">
            ARCHIVE
          </button>
        </div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default Inventory;
