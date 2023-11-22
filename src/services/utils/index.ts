import type { requestType } from "../../types";

const createNewRequestMessage = (requestData: requestType) => {
  return `
    *Нова заявка на сайті*

    *Ім'я:* ${requestData.name}
    *Телефон:* ${requestData.phoneNumber}
    *Email:* ${requestData.email || "Не вказано"}
    *Марка авто:* ${requestData.carBrand || "Не вказано"}
    *Модель авто:* ${requestData.carModel || "Не вказано"}
    *Рік авто:* ${requestData.carYear || "Не вказано"}
    *VIN код:* ${requestData.vinCode || "Не вказано"}
    *Повідомлення:* ${requestData.message || "Не вказано"}
  `;
};

export { createNewRequestMessage };
