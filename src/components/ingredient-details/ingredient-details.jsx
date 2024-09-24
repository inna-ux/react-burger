import { Modal } from '../modal/modal';
import style from './ingredient-details.module.css';
import { array, bool, func, number, string, node } from "prop-types";

function IngredientsDetails({
  onClose,
  children,
  open,
  data,
  currentIndex
}) {

  const ingredient = data[currentIndex];

  return (
    <Modal marker="modal_1" children={children} open={open} onClose={onClose}>
      <div className={`${style.title__container} mt-10 ml-10 mr-10`}>
        <p className="text text_type_main-large">Детали ингредиента</p>
      </div>
      <img
        src={ingredient.image}
        alt="ingredient"
        style={{ width: "520px", height: "240px", objectFit: "contain" }}
      />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <div className={`${style.ingredients__container} pb-15`}>
        <div className={style.ingredients__info}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </div>
        <div className={style.ingredients__info}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </div>
        <div className={style.ingredients__info}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </div>
        <div className={style.ingredients__info}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </Modal>
  )

};
IngredientsDetails.propTypes = {
  open: bool,
  children: node,
  onClose: func,
  data: array,
  currentIndex: number,
  image: string,
  name: string,
  calories: number,
  proteins: number,
  fat: number,
  carbohydrates: number,
};

export default IngredientsDetails;