import { useSelector } from "react-redux"

export default function OrderStatus(){

    const mystate = useSelector(state=>state.logged)

    return (
        <section>
            {/* <p> Logged in : {mystate.loggedIn.toString()} </p> */}

            <table class="table table-striped table-hover">
                ...
            </table>
            
        </section>
    )
}