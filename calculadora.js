function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const resultElement = document.getElementById('result');
    const recommendationsElement = document.getElementById('recommendations');
    const exerciseElement = document.getElementById('exercise');
    const dietElement = document.getElementById('diet');

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultElement.innerText = 'Por favor, introduce valores válidos.';
        resultElement.style.color = '#e74c3c'; // Color para error
        recommendationsElement.innerText = '';
        exerciseElement.innerText = '';
        dietElement.innerText = '';
        return;
    }

    const bmi = weight / (height * height);
    resultElement.innerText = `Tu IMC es ${bmi.toFixed(2)}.`;

    let recommendations = '';
    let exerciseRecommendations = '';
    let dietRecommendations = '';
    
    if (bmi < 18.5) {
        recommendations = 'Tu IMC está por debajo del rango saludable.';
        dietRecommendations = 'Aumenta tu ingesta de calorías con alimentos ricos en proteínas y carbohidratos, como carnes magras, granos enteros, y frutas.';
        exerciseRecommendations = 'Incluye ejercicios de fuerza, como levantamiento de pesas, para ayudar a ganar masa muscular.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        recommendations = '¡Felicidades! Tu IMC está en el rango saludable.';
        recommendationsElement.classList.add('success');
        dietRecommendations = 'Mantén una dieta equilibrada con una combinación de proteínas magras, frutas, vegetales, y granos enteros.';
        exerciseRecommendations = 'Continúa con ejercicios regulares, combinando cardio y entrenamiento de fuerza para mantenerte en forma.';
    } else if (bmi >= 25 && bmi < 29.9) {
        recommendations = 'Tu IMC indica sobrepeso.';
        dietRecommendations = 'Reduce la ingesta de alimentos ricos en grasas y azúcares. Opta por alimentos ricos en fibra, como vegetales y granos enteros.';
        exerciseRecommendations = 'Aumenta tu nivel de actividad física con ejercicios de cardio, como correr o nadar, y entrenamiento de fuerza.';
    } else {
        recommendations = 'Tu IMC indica obesidad.';
        dietRecommendations = 'Consulta con un nutricionista para crear un plan de alimentación personalizado. Enfócate en alimentos bajos en calorías y ricos en nutrientes.';
        exerciseRecommendations = 'Inicia un programa de ejercicio con la ayuda de un profesional. Incluye actividades de bajo impacto al principio, como caminar o nadar, y aumenta gradualmente la intensidad.';
    }

    recommendationsElement.innerText = recommendations;
    exerciseElement.innerText = `Recomendaciones de ejercicio: ${exerciseRecommendations}`;
    dietElement.innerText = `Recomendaciones de dieta: ${dietRecommendations}`;
    
    if (bmi >= 18.5 && bmi < 24.9) {
        recommendationsElement.classList.add('success');
    } else {
        recommendationsElement.classList.remove('success');
    }
}
