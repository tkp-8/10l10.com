<?php
namespace app\Services;

use Illuminate\Support\Facades\Http;

class MakeApiService
{
    protected $baseUrl;
    protected $apiToken;

    public function __construct()
    {
        $this->baseUrl = config('services.make.base_url');
        $this->apiToken = config('services.make.api_token');

    }

    public function getDataStores($teamId, $sortDir='desc')
    {
        $response = Http::withHeaders([
            'Authorization' => 'Token ' . $this->apiToken,
                                      ])->get("{$this->baseUrl}/data-stores",[
                                      'teamId' => $teamId,
            ]);
        if ($response->successful()){
            return $response->json();
        }

        return $response->throw();
    }
}
