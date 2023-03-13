import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        margin-bottom: 25px;
        gap: 15px;

        .exit {
            font-size: 36px;
            cursor: pointer;
        }
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        button{
            align-items: flex-start;
            background: #A328D6;
            border: 1px solid #A328D6;
            border-radius: 5px;
            color: #FFFFFF;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            font-size: 17px;
            font-weight: 700;
            height: 15vh;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
            width: 42vw;

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            ion-icon{
                font-size: 30px;
                font-weight: 700;
            }
        }
    }
`


export {
    Container
}