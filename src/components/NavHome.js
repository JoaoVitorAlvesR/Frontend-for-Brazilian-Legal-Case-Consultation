import Link from "next/link";
import { TitleHome, NavDiv } from '@/styles/navHome';
import Image from "next/image";
import Logo from '../icons/logo.jpeg';
import Row from "./Row";
export default function NavHome() {
    return (
        <NavDiv>
            <Row align='center' gap='10px'>
                <Image src={Logo} alt="Icon1"  width={50} height={50}/>
                <TitleHome>
                    <Link href='/'>
                        Processo livre
                    </Link>
                </TitleHome>
            </Row>
        </NavDiv> 
    )
}