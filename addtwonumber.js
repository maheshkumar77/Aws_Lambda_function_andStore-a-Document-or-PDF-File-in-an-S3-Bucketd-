exports.handler = async (event) => {
    // Ensure that the numbers are provided in the event
    const num1 = event.num1;
    const num2 = event.num2;

    // Check if both numbers are provided and are valid
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Both num1 and num2 should be numbers' }),
        };
    }

    // Add the two numbers
    const result = num1 + num2;

    // Return the result as JSON
    return {
        statusCode: 200,
        body: JSON.stringify({ result: result }),
    };
};
