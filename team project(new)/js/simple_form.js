$(function (){

    $('#Save').on('click', function(){

        var answers = { 
            "Recipient": $('#Recipient').val(),
            "Identify": $('#Identify').val(),
            "Situation": $('#Situation').val(),
            "Background": $('#Background').val(),
            "Assessment": $('#Assessment').val(),
            "Recommendation": $('#Recommendation').val(),
            "Observation": $('#Observation').val()
        }

        var QuestionnaireResponse = {
            "resourceType": "QuestionnaireResponse",
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
            },
            "status": "in-progress",
            "questionnaire": "https://r4.smarthealthit.org/Questionnaire/1412788",
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
            
        $.ajax({
            type: 'POST',
    
            // get URL from client object
            url: 'https://r4.smarthealthit.org/QuestionnaireResponse',
            data: JSON.stringify(QuestionnaireResponse),
            dataType: 'json',
            contentType: 'application/json',
            success: console.log(QuestionnaireResponse)
        })
    })
})