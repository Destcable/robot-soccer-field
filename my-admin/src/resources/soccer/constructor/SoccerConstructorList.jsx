import { useGetList } from "react-admin";
import { Fragment } from "react";
import SoccerConstructorListCards from "./components/SoccerConstructorListCards";

const SoccerConstructorList = () => {
    const { data: fields } = useGetList('soccer/constructor');

    if (!fields) return null;

    return <>
        <Fragment>
            <SoccerConstructorListCards fields={fields}/>
        </Fragment>
    </>

};

export default SoccerConstructorList;