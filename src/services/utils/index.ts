import type { requestType } from '../../types'

type FieldType = string | null | undefined
type FormatType = 'markdown' | 'html' | 'text'

class RequestMessage {
    private readonly NA_STRING = 'Не вказано'

    constructor(private readonly requestData: requestType) {}

    private readonly fieldLabels: Record<keyof requestType, string> = {
        id: 'ID',
        name: "Ім'я",
        phoneNumber: 'Телефон',
        email: 'Email',
        carBrand: 'Марка авто',
        carModel: 'Модель авто',
        carYear: 'Рік авто',
        vinCode: 'VIN код',
        message: 'Повідомлення',
    }

    private formatField(
        fieldName: keyof requestType,
        fieldValue: FieldType,
        format: FormatType
    ) {
        if (fieldName === 'id') return ''

        const label = this.fieldLabels[fieldName]
        const value = fieldValue || this.NA_STRING

        if (format === 'markdown') {
            return `*${label}:* ${value}\n`
        }

        if (format === 'html') {
            return `<b>${label}:</b> ${value}<br/>`
        }

        return `${label}: ${value}\n`
    }

    private generateMessage(format: FormatType) {
        return Object.keys(this.fieldLabels).reduce(
            (message, fieldName) => {
                if (fieldName === 'id') return message

                const value = this.requestData[fieldName as keyof requestType]
                return (
                    message +
                    this.formatField(
                        fieldName as keyof requestType,
                        value as FieldType,
                        format
                    )
                )
            },
            format === 'html'
                ? '<b>Нова заявка на сайті</b><br/><br/>'
                : format === 'markdown'
                ? '*Нова заявка на сайті*\n\n'
                : 'Нова заявка на сайті\n\n'
        )
    }

    markdown() {
        return this.generateMessage('markdown')
    }

    html() {
        return this.generateMessage('html')
    }

    text() {
        return this.generateMessage('text')
    }
}

export { RequestMessage }
