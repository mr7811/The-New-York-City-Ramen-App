import Layout from "../components/Layout";
import {Link} from 'react-router-dom'
import {getRamen} from '../services/ramen'
import './Home.css'
import { useEffect } from "react";

export default function Home ({user, toggle}) {
    useEffect(() => {
        const fetchRamen = async() => {
            let response = await getRamen()
            setRamen(response)
        }
    fetchRamen()
          
})
return(
    <Layout>
    <h2>NYC Ramen</h2>
</Layout>
)
}