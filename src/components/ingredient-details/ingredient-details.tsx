import style from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../utils/types/hook";
import { TIngredient } from "../../utils/types/types";

function IngredientsDetails() {
  const { id } = useParams();
  const itemsLoaded = useSelector((store) => store.listIngredients.data);
  const ingredient = itemsLoaded.find((item: TIngredient) => item._id === id);
  return (
    <>
      {!ingredient ? null : (
        <div className={style.block}>
          <img
            src={ingredient.image_large}
            alt="the ingredient"
            className={style.img}
          />
          <p className="text text_type_main-medium mt-4 mb-8">
            {ingredient.name}
          </p>
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
        </div>
      )}
    </>
  );
}

export default IngredientsDetails;
