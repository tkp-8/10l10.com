<?php
namespace app\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
class MakeApiService
{
    protected $baseUrl;
    protected $apiToken;

    public function __construct()
    {
        $this->baseUrl = config('services.make.base_url');
        $this->apiToken = config('services.make.api_token');
        $this->googleId = config('services.google.client_id');
        $this->googleSecret = config('services.google.client_secret');
    }

    protected function getHeaders()
    {
        return [
            'Authorization' => 'Bearer ' . $this->apiToken
        ];
    }

    public function getDataStores($teamId)
    {
        $data = [
            'accountName' => 'Google Test',
            'accountType' => 'google',
            'scopes' => [
                'chat:write',
            ],
            'clientId' => $this->googleId,
            'clientSecret' => $this->googleSecret,
        ];

        Log::debug('Sending data to API', $data);

        $response = Http::withHeaders($this->getHeaders())->post("{$this->baseUrl}/connections?teamId={$teamId}",$data);

        if ($response->successful()){
            return $response->json();
        }

        Log::error('API Request failed', [
            'status_code' => $response->status(),
            'response_body' => $response->body()
        ]);

        return $response->throw();
    }
}
