import Details from "../component/Detail";
import Header from "../component/Header"
import Heading from "../component/Heading";
import MyComponent from "../component/Table";
import datas from "./data.json";
import TableHeading from "../component/TablesHeading";
import BasicTabs from "../component/Tabs";
import { Button } from "@mui/material";
const header = ["Category", "Streams", "Watchlists", "Owner", "date"];

const data = [
    { "Category": "Action", "Streams": "24,512,232", "Watchlists": "389,234", "Owner": "Sony Entertainment", "date": "21th May, 2022" },
    { "Category": "Action", "Streams": "24,512,232", "Watchlists": "389,234", "Owner": "Sony Entertainment", "date": "21th May, 2022" },
];

const data2 = [
    "link",
    "category1",
    "category2",
    "abtTr",
    "watchlists",
    "streams",
    "date"
]
const Home = () => {

    function createTableData(Category, Streams, Watchlists, Owner, date) {
        return {
            Category,
            Streams,
            Watchlists,
            Owner,
            date
        };
    }

    const tableData = data?.map((row, i) => {
        return createTableData(
            <Button color="primary">
                {row.Category}
            </Button>,
            row.Streams,
            row.Watchlists,
            row.Owner,
            row.date
        );
    });

    function createTableData2(name, link, category1, category2, abtTr,watchlists,streams,date) {
        return {
            name,
            link,
            category1,
            category2,
            abtTr,
            watchlists,
            streams,
            date
        };
    }

    const tableData2 = datas?.map((row, i) => {
        return createTableData2(
           row.name,
            row.link,
            row.category1,
            row.category2,
            row.abtTr,
            row.watchlists,
            row.streams,
            row.date
        );
    });

    return (
        <>
            <Header />
            <Heading />
            <Details />
            <TableHeading header={header} data={tableData} />
            <MyComponent header={header} data={tableData} />
            <br />
            <TableHeading />
            <MyComponent header={header} data={tableData} />
            <br />
            <br />
            <BasicTabs header={data2} tableData={tableData2} />
        </>
    )
}

export default Home;