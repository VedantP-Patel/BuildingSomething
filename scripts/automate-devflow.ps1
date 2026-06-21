$ErrorActionPreference='Stop'
$base='http://localhost:3001'
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
Write-Output 'Registering user...'
$reg = Invoke-RestMethod -Uri "$base/api/auth/register" -Method Post -Body (@{email='devtest+1@example.com';password='Password123';name='Dev Test'} | ConvertTo-Json) -ContentType 'application/json' -WebSession $session
Write-Output 'Register response:'
$reg | ConvertTo-Json
Write-Output 'Fetching CSRF token...'
$csrf = Invoke-RestMethod -Uri "$base/api/auth/csrf" -WebSession $session
$csrf | ConvertTo-Json
Write-Output 'Signing in via credentials...'
$signin = Invoke-RestMethod -Uri "$base/api/auth/callback/credentials" -Method Post -WebSession $session -Body @{csrfToken=$csrf.csrfToken; email='devtest+1@example.com'; password='Password123'; callbackUrl=$base; json='true'} -ContentType 'application/x-www-form-urlencoded'
Write-Output 'Sign-in result:'
$signin | ConvertTo-Json
Write-Output 'Calling connect-bank...'
$connect = Invoke-RestMethod -Uri "$base/api/connect-bank" -Method Post -WebSession $session
$connect | ConvertTo-Json
Write-Output 'Fetching subscriptions...'
$subs = Invoke-RestMethod -Uri "$base/api/subscriptions" -WebSession $session
$subs | ConvertTo-Json
if ($subs.subscriptions.Count -gt 0) {
  $id=$subs.subscriptions[0].id
  Write-Output "Cancelling subscription $id"
  $cancel = Invoke-RestMethod -Uri "$base/api/subscriptions/$id/cancel" -Method Post -WebSession $session
  $cancel | ConvertTo-Json
} else { Write-Output 'No subscriptions to cancel' }
Write-Output 'Fetching audit logs...'
$logs = Invoke-RestMethod -Uri "$base/api/audit" -WebSession $session
$logs | ConvertTo-Json
Write-Output 'Done.'
