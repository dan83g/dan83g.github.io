export const resources = {
  en: {
    translation: {
      errors: {
        unexpected_error: 'Unexpected error. We automatically register errors and will fix everything soon',
        'Failed to fetch': 'Connection error. Go to the server directory and start the server using the start script',
        ERR_UNKNOWN_ERROR: 'Unknown error',
        ERR_UNKNOWN_RESPONSE_FORMAT: 'Unknown response format',
        ERR_NO_PERMISSIONS: "You don't have permission",
        ERR_PAGE_NOT_FOUND: 'Page not found',
        ERR_BELOW_ZERO: 'Cost is below zero',
        ERR_IS_REQUIRED: 'Required field',
        too_short_password: 'The password is too short',
        ERR_NOT_SAME_PASSWORD: "Passwords don't match",
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect password or email',
        ERR_NOT_FOUND: 'An entity with this id was not found',
        ERR_USER_NOT_REGISTER: 'Register to access this feature',
        ERR_INCORRECT_PASSWORD: 'Invalid password',
        ERR_ACCOUNT_ALREADY_EXIST: 'An account with this email already exists',
        ERR_INVALID_PASSWORD: 'The password must contain at least 8 characters',
        ERR_INVALID_EMAIL: 'Invalid email',
        ERR_INVALID_IMAGE_LINK: 'Invalid photo link',
        ERR_NO_MATCHING: 'There are no products matching these search terms',
        ERR_TOKEN_REQUIRED_ERROR:
          'Server token error. We automatically register all errors and will fix everything soon',
        ERR_AUTH_ERROR: 'You are not logged in, log in to your account and try again',
        ERR_DATA_BASE_ERROR: 'Database server error. We automatically register all errors and will fix everything soon',
        INTERNAL_SERVER_ERROR: 'Server error. We automatically register all errors and will fix everything soon',
        ERR_VALIDATION_ERROR:
          'The alias must be at least 7 characters and can contain only numbers, letters and an underscore',
      },
      screens: {
        ProfileScreen: {
          title: 'Profile',
          updateProfile: {
            title: 'Change profile',
            success: 'Profile changed successfully',
            save: 'Save',
          },
          changePassword: {
            title: 'Change password',
            success: 'Password changed successfully',
            save: 'Change',
          },
        },
        auth: {
          title: 'Authentication',
          signIn: {
            title: 'Sign in',
            submit: 'Sign in',
          },
          signUp: {
            title: 'Sign out',
            submit: 'Sign out',
          },
        },
      },
      barActions: {
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        cancel: 'Cancel',
      },
      orderStatuses: {
        pending_confirmation: 'Pending confirmation',
        processing: 'Processing',
        packaging: 'Packaging',
        waiting_for_delivery: 'Waiting for delivery',
        in_transit: 'In transit',
        return_requested: 'Return requested',
        delivered: 'Delivered',
        order_cancelled: 'Canceled',
      },
      navigation: {
        home: 'Home',
        catalog: 'Catalog',
        profile: 'Profile',
        cart: 'Cart',
        orders: 'Orders',
        admin: 'Admin',
        adminCategories: 'Categories',
        adminProducts: 'Products',
        adminOrders: 'Orders',
      },
      pages: {
        Cart: {
          orderButtonTitle: 'Order',
          totalPrice: 'Total Price',
        },
      },
      forms: {
        AuthForm: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
          },
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          signIn: {
            headerTitle: 'Sign In',
            buttonTitle: 'Sign in',
          },
          signUp: {
            headerTitle: 'Sign Up',
            buttonTitle: 'Sign Up',
          },
        },
        CategoryForm: {
          name: {
            title: 'Name',
            placeholder: 'Enter category name',
          },
          photo: {
            title: 'Photo',
            placeholder: 'Enter link to photo',
          },
          create: {
            headerTitle: 'Create category',
            buttonTitle: 'Create',
          },
          update: {
            headerTitle: 'Update category',
            buttonTitle: 'Update',
          },
        },
        ChangePasswordForm: {
          title: 'Changing Password',
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          newPassword: {
            title: 'New password',
            placeholder: 'Enter new password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
          submitButton: {
            title: 'Change password',
          },
        },
        ProfileForm: {
          title: 'User',
          name: {
            title: 'Nickname',
            placeholder: 'Enter your Nickname',
          },
        },
        ProductForm: {
          title: 'Product',
          fields: {
            name: {
              title: 'Name',
              placeholder: 'Enter product name',
            },
            desc: {
              title: 'Description',
              placeholder: 'Enter product description',
            },
            price: {
              title: 'Price',
              placeholder: 'Enter product price',
            },
            oldPrice: {
              title: 'Old Price',
              placeholder: 'Enter old product price',
            },
            photo: {
              title: 'Photo',
              placeholder: 'Enter product image URL',
            },
            category: {
              title: 'Product category',
              placeholder: 'Enter product category',
            },
          },
        },
      },
      fields: {
        string: 'String value',
      },
      components: {
        Search: {
          Input: {
            placeholder: 'Enter product name',
          },
          Button: {
            caption: 'Search',
          },
          CategoryFilter: {
            caption: 'Category',
          },
        },
        AddToCart: {
          toCart: 'To cart',
          deleteFromCart: 'Delete',
          buyNow: 'Buy Now',
        },
        RemoveButton: {
          title: 'Data will be lost, delete?',
          ok: 'Remove',
          cancel: 'Cancel',
        },
        RangeInputs: {
          from: 'From',
          to: 'To',
        },
        InputIntRangeList: {
          title: 'Range',
        },
        NumberInput: {
          float: {
            placeholder: 'Fractional number',
          },
          integer: {
            placeholder: 'Integer',
          },
        },
        login: {
          enter: 'Login',
          leave: 'Logout',
        },
      },
    },
  },
  ru: {
    translation: {
      errors: {
        unexpected_error: 'Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим',
        'Failed to fetch':
          'Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start',
        ERR_UNKNOWN_ERROR: 'Неизвестная ошибка',
        ERR_UNKNOWN_RESPONSE_FORMAT: 'Неизвестный формат ответа',
        ERR_NO_PERMISSIONS: 'У Вас нет прав доступа',
        ERR_PAGE_NOT_FOUND: 'Страница не найдена',
        ERR_IS_REQUIRED: 'Обязательное поле',
        ERR_BELOW_ZERO: 'Цена ниже нуля',
        too_short_password: 'Слишком короткий пароль',
        ERR_NOT_SAME_PASSWORD: 'Пароли не совпадают',
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Некорректный пароль или email',
        ERR_NOT_FOUND: 'Сущность с таким id не найдена',
        ERR_USER_NOT_REGISTER: 'Зарегистрируйтесь, чтобы получить доступ к этой функции',
        ERR_INCORRECT_PASSWORD: 'Некорректный пароль',
        ERR_ACCOUNT_ALREADY_EXIST: 'Аккаунт с таким email уже существует',
        ERR_INVALID_PASSWORD: 'Пароль должен содержать от 8 символов',
        ERR_INVALID_EMAIL: 'Некорректный email',
        ERR_INVALID_IMAGE_LINK: 'Некорректная ссылка на фото',
        ERR_NO_MATCHING: 'Нет продуктов, соответствующих критериям поиска',
        ERR_TOKEN_REQUIRED_ERROR:
          'Серверная ошибка токена. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_AUTH_ERROR: 'Вы не авторизованы, войдите в учетную запись и повторите попытку',
        ERR_DATA_BASE_ERROR:
          'Серверная ошибка базы данный. Мы автоматически регистрируем все ошибки и скоро все исправим',
        INTERNAL_SERVER_ERROR: 'Серверная ошибка. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_VALIDATION_ERROR:
          'Псевдоним должен быть от 7 символов и может содержать только числа, буквы и символ нижнего подчеркивания',
      },
      screens: {
        ProfileScreen: {
          title: 'Профиль',
          updateProfile: {
            title: 'Изменить профиль',
            success: 'Профиль успешно изменен',
            save: 'Сохранить',
          },
          changePassword: {
            title: 'Изменить пароль',
            success: 'Пароль успешно изменен',
            save: 'Изменить',
          },
        },
        auth: {
          title: 'Аутентификация',
          signIn: {
            title: 'Войти',
            submit: 'Войти',
          },
          signUp: {
            title: 'Зарегистрироваться',
            submit: 'Зарегистрироваться',
          },
        },
      },
      barActions: {
        create: 'Добавить',
        update: 'Обновить',
        delete: 'Удалить',
        cancel: 'Отменить',
      },
      orderStatuses: {
        pending_confirmation: 'Ожидает подтверждения',
        processing: 'Комплектуется',
        packaging: 'Упаковывается',
        waiting_for_delivery: 'Ожидает доставки',
        in_transit: 'Доставляется',
        return_requested: 'Запрос на возврат',
        delivered: 'Доставлен',
        order_cancelled: 'Отменен',
      },
      navigation: {
        home: 'Домашняя страница',
        catalog: 'Каталог',
        profile: 'Профиль',
        cart: 'Корзина',
        orders: 'Заказы',
        admin: 'Админка',
        adminCategories: 'Категории',
        adminProducts: 'Продукты',
        adminOrders: 'Заказы',
      },
      pages: {
        Cart: {
          orderButtonTitle: 'Заказать',
          totalPrice: 'Итоговая цена',
        },
      },
      forms: {
        AuthForm: {
          email: {
            title: 'Email',
            placeholder: 'Укажите email',
          },
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          signIn: {
            headerTitle: 'Вход',
            buttonTitle: 'Войти',
          },
          signUp: {
            headerTitle: 'Регистрация',
            buttonTitle: 'Зарегистрироваться',
          },
        },
        CategoryForm: {
          name: {
            title: 'Название',
            placeholder: 'Укажите название категории',
          },
          photo: {
            title: 'Фото',
            placeholder: 'Укажите ссылку на фото',
          },
          create: {
            headerTitle: 'Создать категорию',
            buttonTitle: 'Создать',
          },
          update: {
            headerTitle: 'Обновить категорию',
            buttonTitle: 'Обновить',
          },
        },
        ChangePasswordForm: {
          title: 'Изменение пароля',
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          newPassword: {
            title: 'Новый пароль',
            placeholder: 'Укажите новый пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
          submitButton: {
            title: 'Изменить пароль',
          },
        },
        ProfileForm: {
          title: 'Пользователь',
          name: {
            title: 'Псевдоним',
            placeholder: 'Введите псевдоним',
          },
        },
        ProductForm: {
          title: 'Продукт',
          fields: {
            name: {
              title: 'Название',
              placeholder: 'Введите название продукта',
            },
            desc: {
              title: 'Описание',
              placeholder: 'Введите описание',
            },
            price: {
              title: 'Цена',
              placeholder: 'Введите цену',
            },
            oldPrice: {
              title: 'Старая цена',
              placeholder: 'Введите старую цену',
            },
            photo: {
              title: 'Фото',
              placeholder: 'Введите URL фото',
            },
            category: {
              title: 'Кстегория',
              placeholder: 'Введите категорию',
            },
            submitButton: {
              title: 'Сохранить',
            },
          },
        },
      },
      fields: {
        string: 'Строковое значение',
      },
      components: {
        Search: {
          Input: {
            placeholder: 'Введите название товара',
          },
          Button: {
            caption: 'Поиск',
          },
          CategoryFilter: {
            caption: 'Категория',
          },
        },
        AddToCart: {
          toCart: 'В корзину',
          deleteFromCart: 'Удалить',
          buyNow: 'Купить',
        },
        RemoveButton: {
          title: 'Данные будут потеряны, удалить?',
          ok: 'Удалить',
          cancel: 'Отмена',
        },
        RangeInputs: {
          from: 'От',
          to: 'До',
        },
        InputIntRangeList: {
          title: 'Диапазон',
        },
        NumberInput: {
          float: {
            placeholder: 'Дробное число',
          },
          integer: {
            placeholder: 'Целое число',
          },
        },
        login: {
          enter: 'Вход',
          leave: 'Выход',
        },
      },
    },
  },
};
