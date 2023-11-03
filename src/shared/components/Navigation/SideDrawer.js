import './SideDrawer.css'
import ReactDOM from "react-dom";

const SideDrawer = props =>{

    //creatPortal :  DOM 구조 안에서 렌더링하는 대신 DOM 트리의 완전히 다른 위치에 렌더링하고자 할 때 사용
    const content = <aside className="side-drawer">{props.children}</aside>;
    return (
        ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
    )
};

export default SideDrawer;