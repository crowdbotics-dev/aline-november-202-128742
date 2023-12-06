import axios from "axios"
const alinenovemberAPI = axios.create({
  baseURL: "https://aline-november-202-128742.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return alinenovemberAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return alinenovemberAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return alinenovemberAPI.post(`/api/v1/signup/`, payload)
}
function modules_files_uploads_list(payload) {
  return alinenovemberAPI.get(`/modules/files/uploads/`)
}
function modules_files_uploads_create(payload) {
  return alinenovemberAPI.post(`/modules/files/uploads/`, payload)
}
function modules_files_uploads_retrieve(payload) {
  return alinenovemberAPI.get(`/modules/files/uploads/${payload.id}/`)
}
function modules_files_uploads_update(payload) {
  return alinenovemberAPI.put(`/modules/files/uploads/${payload.id}/`, payload)
}
function modules_files_uploads_partial_update(payload) {
  return alinenovemberAPI.patch(
    `/modules/files/uploads/${payload.id}/`,
    payload
  )
}
function modules_files_uploads_destroy(payload) {
  return alinenovemberAPI.delete(`/modules/files/uploads/${payload.id}/`)
}
function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return alinenovemberAPI.get(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_create(payload) {
  return alinenovemberAPI.post(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return alinenovemberAPI.delete(
    `/modules/two-factor-authentication/enable/2fa`
  )
}
function modules_two_factor_authentication_google_authenticator_qr_retrieve(
  payload
) {
  return alinenovemberAPI.get(
    `/modules/two-factor-authentication/google/authenticator/qr`
  )
}
function modules_two_factor_authentication_send_otp_create(payload) {
  return alinenovemberAPI.post(`/modules/two-factor-authentication/send/otp`)
}
function modules_two_factor_authentication_verify_otp_create(payload) {
  return alinenovemberAPI.post(`/modules/two-factor-authentication/verify/otp`)
}
function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return alinenovemberAPI.post(
    `/modules/two-factor-authentication/verify/otp/${payload.enable}`
  )
}
function rest_auth_login_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return alinenovemberAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return alinenovemberAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return alinenovemberAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return alinenovemberAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
