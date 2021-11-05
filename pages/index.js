import React from "react"
import { fullName } from '../constants/apiURL'
export default class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            console.log('window', window)
        }, 1000);
    }
    render() {
        return <div className="home-page">
            NEXT_PUBLIC_ANALYTICS_ID
            <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
            NAME
            <p>{typeof process.env.NAME}</p>
            fullName
            <p>{fullName}</p>
        </div>
    }
}
export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}