// OTP Service for handling phone verification
import { FirebasePhoneService, FirebaseOTPResponse } from "./SMSService";
import { ConfirmationResult, UserCredential } from "firebase/auth";

export interface OTPResponse {
  success: boolean;
  message: string;
  confirmationResult?: ConfirmationResult;
  userCredential?: UserCredential;
  error?: string;
}

export class OTPService {
  private static confirmationResult: ConfirmationResult | null = null;

  // Send OTP using Firebase
  static async sendOTP(
    phone: string,
    countryCode: string = "+91",
    recaptchaContainerId: string = "recaptcha-container"
  ): Promise<OTPResponse> {
    const fullPhone = `${countryCode}${phone}`;
    const response: FirebaseOTPResponse = await FirebasePhoneService.sendOTP(
      fullPhone,
      recaptchaContainerId
    );
    if (response.success && response.confirmationResult) {
      this.confirmationResult = response.confirmationResult;
    }
    return {
      success: response.success,
      message: response.message,
      confirmationResult: response.confirmationResult,
      error: response.error,
    };
  }

  // Verify OTP using Firebase
  static async verifyOTP(otp: string): Promise<OTPResponse> {
    if (!this.confirmationResult) {
      return {
        success: false,
        message: "No OTP session found. Please request a new OTP.",
      };
    }
    const result = await FirebasePhoneService.verifyOTP(
      this.confirmationResult,
      otp
    );
    if (result.success) {
      // Clear confirmationResult after successful verification
      this.confirmationResult = null;
    }
    return {
      success: result.success,
      message: result.message,
      userCredential: result.userCredential,
      error: result.error,
    };
  }

  // Resend OTP (just calls sendOTP again)
  static async resendOTP(
    phone: string,
    countryCode: string = "+91",
    recaptchaContainerId: string = "recaptcha-container"
  ): Promise<OTPResponse> {
    return this.sendOTP(phone, countryCode, recaptchaContainerId);
  }

  // Reset OTP session
  static resetOTP() {
    this.confirmationResult = null;
  }
}
