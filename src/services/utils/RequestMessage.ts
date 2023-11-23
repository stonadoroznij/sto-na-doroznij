import type { requestType } from '@/types'

type FieldValueType = string | null | undefined
type FormatType = 'markdown' | 'html' | 'text'
type FieldNameType = keyof requestType & string

class RequestMessage {
    private readonly NA_STRING = '---'

    constructor(private readonly requestData: requestType) {}

    private readonly fieldLabels: Record<FieldNameType, string> = {
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
        fieldName: FieldNameType,
        fieldValue: FieldValueType,
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
        const keys = Object.keys(this.fieldLabels).map(
            (key) => key as FieldNameType
        )
        const messageTitleList = {
            markdown: '*Нова заявка на сайті*\n\n',
            html: '<b>Нова заявка на сайті</b><br/><br/>',
            text: 'Нова заявка на сайті\n\n',
        }

        return keys.reduce(
            (message, fieldName): string => {
                if (fieldName === 'id') return message
                const value: FieldValueType = this.requestData[fieldName]

                const formattedField = this.formatField(
                    fieldName,
                    value,
                    format
                )
                return `${message}${formattedField}`
            },messageTitleList[format])
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

export default RequestMessage
