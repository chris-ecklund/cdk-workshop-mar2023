exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    console.trace("hello Russ at 1:50pm");
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `Good Afternoon, CDK! You've hit ${event.path}\n`
    };
  };