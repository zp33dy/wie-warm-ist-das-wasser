# Use an official Python runtime as a parent image
FROM python:3.13.0a4-bookworm

# Set the working directory in the container
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in requirements.txt


ARG HOSTNAME
ARG SENSOR
ARG OUTPUT_FILE
ARG DEBUG
# Run python script with environment variables as arguments when the container launches
#CMD ["python3", "main.py", ${HOSTNAME}, "-s", ${SENSOR}, "--output", ${OUTPUT_FILE}, "--debug=", ${DEBUG}]
CMD ["python3", "main.py", "raspberrypi", "-s", "28-3ce1d4430f2d", "--output", "/app/output/output.csv", "--debug"]
