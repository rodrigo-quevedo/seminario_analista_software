import ErrorSection from "../components/ErrorSection";

type Props = {
    errMsj: string
}


export default function ErrorPage({errMsj}: Props){


    return (
        <ErrorSection errMsj={errMsj}/>
    )
}