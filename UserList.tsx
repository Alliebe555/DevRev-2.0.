img?: string;
  name: string;
  email: string;
  rating: number;
  rating?: number;
  gender: string;
  birthday: string;
  age: number;
    detect: "Прямой",
    name: "Анастасия Кузьмина",
    email: "evanyates@gmail.com",
    rating: 4,
    rating: 1,
    gender: "Жен.",
    birthday: "12 апр 1997",
    age: 25,
    detect: "Соцсеть",
    name: "Анастасия Кузьмина",
    email: "evanyates@gmail.com",
    rating: 4,
    gender: "Жен.",
    birthday: "12 апр 1997",
    age: 25,
    detect: "Таргет",
    name: "Анастасия Кузьмина",
    email: "evanyates@gmail.com",
    rating: 4,
    gender: "Жен.",
    birthday: "12 апр 1997",
    age: 25,
            </div>

            <div className="user__rating-wrapper">
              <img
                className="user__star"
                src={StarIcon}
                alt={`Рейтинг - ${user.rating}`}
              />
              <p className="user__rating">{user.rating}/5</p>
              {user.rating && (
                <>
                  <img
                    className="user__star"
                    src={StarIcon}
                    alt={`Рейтинг - ${user.rating}`}
                  />
                  <p className="user__rating">{user.rating}/5</p>
                </>
              )}
            </div>
          </div>

    font-weight: 400;
    line-height: 16px;
    color: #5c5d67;

    &:hover {
      opacity: 0.6;
    }
  }

  &__rating-wrapper {
    display: flex;
    align-items: center;
    column-gap: 6px;
    width: 41px;
  }

  &__rating {
