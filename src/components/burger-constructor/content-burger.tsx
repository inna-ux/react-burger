import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients-constructor";
import { TIngredient } from "../../utils/types";

type TContentBurgerProps = {
  item: TIngredient;
  index: number;
  moveList: (a: number, b: number) => void
}
type TContentBurger = {
  type?: string;
  item: TIngredient;
  index: number;
};


export const ContentBurger = ({ item, index, moveList }: TContentBurgerProps): React.JSX.Element => {
  const dispatch = useDispatch();

  // useDrag - элемент списка можно перетаскивать
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop - элемент списка также является областью перетаскивания
  const [, dropRef] = useDrop({
    accept: "item",
    hover: (item: TContentBurger, monitor: any) => {
      if (!ref.current) { return };
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) { return };
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // при перетаскивании вниз продолжайте движение только тогда, когда курсор меньше среднего значения Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // при перетаскивании вверх продолжайте движение только тогда, когда курсор больше среднего значения Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveList(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  // Объединиe 2х ссылок в одну (обе можно перетаскивать и на них можно наклеивать).
  const ref = useRef<HTMLDivElement>(null);
  dragRef(dropRef(ref));

  //Сделала перетаскиваемые элементы прозрачными, чтобы было легче видеть, куда мы их помещаем
  const opacity = isDragging ? 0 : 1;
  return (
    <div style={{ opacity }} draggable ref={ref}>
      <ConstructorElement
        text={String(item?.name)}
        price={Number(item?.price)}
        thumbnail={String(item?.image)}
        handleClose={() => dispatch({ type: DELETE_INGREDIENT, item })}
      />
    </div>
  );
};
