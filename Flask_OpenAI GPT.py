from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = 'your-openai-api-key'

@app.route('/generate-design', methods=['POST'])
def generate_design():
    data = request.json
    prompt = data['prompt']
    
    # Use GPT to generate design description
    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=f"Generate a website design layout based on: {prompt}",
      max_tokens=200
    )

    design_description = response.choices[0].text.strip()
    
    return jsonify({'design': design_description})

if __name__ == '__main__':
    app.run(debug=True)
