const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
	  <html>
	  
	  <head>
		  <meta charset="UTF-8">
		  <title>OTP Verification Email</title>
		  <style>
			  body {
				  background-color: #f7f7f7;
				  font-family: Arial, sans-serif;
				  font-size: 16px;
				  line-height: 1.4;
				  color: #333333;
				  margin: 0;
				  padding: 0;
			  }
	  
			  .container {
				  max-width: 600px;
				  margin: 0 auto;
				  padding: 20px;
				  text-align: center;
				  background-color: #ffffff;
				  border-radius: 8px;
				  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			  }
	  
			  .brand {
				  font-size: 24px;
				  font-weight: bold;
				  margin-bottom: 20px;
				  color: #333333;
			  }
	  
			  .message {
				  font-size: 24px;
				  font-weight: bold;
				  margin-bottom: 20px;
				  color: #333333;
			  }
	  
			  .body {
				  font-size: 18px;
				  margin-bottom: 20px;
				  color: #555555;
			  }
	  
			  .cta {
				  display: inline-block;
				  padding: 12px 24px;
				  background-color: #007bff;
				  color: #ffffff;
				  text-decoration: none;
				  border-radius: 5px;
				  font-size: 18px;
				  font-weight: bold;
				  margin-top: 20px;
				  transition: background-color 0.3s ease;
			  }
	  
			  .cta:hover {
				  background-color: #0056b3;
			  }
	  
			  .support {
				  font-size: 14px;
				  color: #777777;
				  margin-top: 20px;
			  }
	  
			  .highlight {
				  font-weight: bold;
				  color: #007bff;
				  font-size: 28px;
			  }
		  </style>
	  
	  </head>
	  
	  <body>
		  <div class="container">
			  <div class="brand">CodeSchool - Online Coding Platform</div>
			  <div class="message">OTP Verification Email</div>
			  <div class="body">
				  <p>Dear User,</p>
				  <p>Thank you for registering with CodeSchool - your gateway to online coding education. To complete your registration, please use the following OTP
					  (One-Time Password) to verify your account:</p>
				  <h1 class="highlight">${otp}</h1>
				  <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.
					  Once your account is verified, you will have access to our platform and its features.</p>
			  </div>
			  <a href="mailto:support@codeschool.com" class="cta">Verify Account</a>
			  <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					  href="mailto:support@codeschool.com">support@codeschool.com</a>. We are here to help!</div>
		  </div>
	  </body>
	  
	  </html>`;
};
module.exports = otpTemplate;
