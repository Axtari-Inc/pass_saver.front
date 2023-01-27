import React from 'react';
import mAStyles from './passwordArea.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeDragStartElement, saveDragStartElement} from "../../store/store";

export const PasswordArea = (props: any) => {

    // @ts-ignore
    const data = useSelector(state => state.toolkit.data);
    // @ts-ignore
    const dragStartElementId = useSelector(state => state.toolkit.dragStartElement);
    const dispatch = useDispatch();

    function dropHandler(id: number) {
        data.map((item: any) => {
            if (item.id === id) {
                item.id = dragStartElementId;
            }
            if (dragStartElementId===item.id){
                item.id=id;
            }
        })
    }

    function dragStartHandler(id: number) {
        dispatch(saveDragStartElement(id));
    }

    function dragEndHandler() {
        dispatch(removeDragStartElement());
    }

    const items = data.map((item: any) => {
        return <div className={mAStyles.item}
                    draggable={true}
                    onDrop={() => dropHandler(item.id)}
                    onDragStart={() => dragStartHandler(item.id)}
                    onDragEnd={() => dragEndHandler()}>
            <img src={item.img} alt={''}/>
            <span className={mAStyles.block}>{item.title}</span>
        </div>
    })
    return (
        <div className={mAStyles.password_area}>
            {items}
        </div>
    );
};

