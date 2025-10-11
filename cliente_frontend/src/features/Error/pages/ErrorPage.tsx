import ErrorSection from "../components/ErrorSection";

type Props = {
    errMsj: string,

    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}


export default function ErrorPage({errMsj, setErrMsj}: Props){


    return (
        <ErrorSection errMsj={errMsj} setErrMsj={setErrMsj}/>
    )
}