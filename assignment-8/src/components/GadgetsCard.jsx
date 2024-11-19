import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
const GadgetsCard = () => {
    const data = useLoaderData()
    const { gadgets } = useParams()
    const [gadget, setGadget] = useState([])
    useEffect(() => {
        if (gadgets) {
            const gadgetsFiled = [...data].filter(gadget => gadget.category === gadgets)
            setGadget(gadgetsFiled)
        }
        else {
            setGadget(data)
        }
    }, [data, gadgets])
    return (
        <>
            <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    gadget.map((gad, index) => <Card key={index} gad={gad}></Card>)
                }
            </div>
        </>
    );
};

export default GadgetsCard;