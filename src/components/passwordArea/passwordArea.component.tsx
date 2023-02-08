import React from 'react';
import mAStyles from './passwordArea.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeDragStartElement, saveDragStartElement, updateStore} from "../../store/store";

export const PasswordArea = (props: any) => {

    // @ts-ignore
    const data = useSelector(state => state.toolkit.data);
    // @ts-ignore
    const dragStartElementId = useSelector(state => state.toolkit.dragStartElement);
    const dispatch = useDispatch();

    function dropHandler(e:any,id: number) {
        e.preventDefault();
       let newData = data.map((item: any) => {
            if (item.id === id) {
            return     {...item, id:dragStartElementId};
            }
            if (dragStartElementId===item.id){
             return    {...item,id:id};
            }
        })
        const sortData = newData.sort((a:any,b:any)=>a.id-b.id);

        dispatch(updateStore(sortData));
    }

    function dragStartHandler(id: number) {
        dispatch(saveDragStartElement(id));
    }

    function dragEndHandler() {
        dispatch(removeDragStartElement());
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    const items = data.map((item: any) => {
        return <div className={mAStyles.item} key={item.id}
                    draggable={true}
                    onDrop={(e) => dropHandler(e, item.id)}
                    onDragStart={() => dragStartHandler(item.id)}
                    onDragEnd={() => dragEndHandler()}
                    onDragOver={(e) => dragOverHandler(e)}>
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

