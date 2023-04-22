import {ServerError} from "src/components/errors/500"
import type {NextPage} from "next";

const ServerErrorPage: NextPage = () => {
    return (
        <ServerError/>
    );
}

export default ServerErrorPage
