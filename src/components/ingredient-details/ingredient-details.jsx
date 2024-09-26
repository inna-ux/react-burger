import style from "./ingredient-details.module.css";
import { ingredientPropTypes } from "../../utils/prop-types";

function IngredientsDetails({ ingredient }) {
  return (
    <>
      <img src={ingredient.image} alt="the ingredient" className={style.img} />
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
    </>
  );
}
IngredientsDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};

export default IngredientsDetails;
