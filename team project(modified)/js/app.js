function index_fetchForms(params) {
    
}


function index_createDetailed(params) {
    
}


function generalForm_save() {

    // Retrieve answers from inputs
    var answers = { 
        "Recipient": document.querySelector('#Recipient'),
        "Identify": document.querySelector('#Identify'),
        "Situation": document.querySelector('#Situation'),
        "Background": document.querySelector('#Background'),
        "Assessment": document.querySelector('#Assessment'),
        "Recommendation": document.querySelector('#Recommendation'),
        "Observation": document.querySelector('#Observation')
    }

    // Create QuestionnaireResponse JSON
    var Response = {
        "resourceType": "QuestionnaireResponse",
        "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
        },
        "status": "in-progress",
        "questionnaire": "https://r4.smarthealthit.org/Questionnaire/1406287",
        "subject": {
            "reference": "https://r4.smarthealthit.org/Patient/476d3544-6370-479f-9ac9-c43434aae12f",
            "type": "Patient"
        },
    
        "item": [
            {
                "linkId": "Recipient",
                "answer": [{"valueString": answers.Recipient}]
            },
            {
                "linkId": "Identify",
                "answer": [{"valueString": answers.Identify}]
            },
            {
                "linkId": "Situation",
                "answer": [{"valueString": answers.Situation}]
            },
            {
                "linkId": "Background",
                "answer": [{"valueString": answers.Background}]
            },
            {
                "linkId": "Assessment",
                "answer": [{"valueString": answers.Assessment}]
            },
            {
                "linkId": "Recommendation",
                "answer": [{"valueString": answers.Recommendation}]
            },
            {
                "linkId": "Observation",
                "answer": [{"valueString": answers.Observation}]
            }
        ]
    }
    
    return Response
}