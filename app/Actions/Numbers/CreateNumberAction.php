<?php

namespace App\Actions\Numbers;

use Illuminate\Support\Facades\DB;
use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Lorisleiva\Actions\Concerns\AsAction;
use App\Http\Requests\Numbers\CreateOrUpdateNumberRequest;
use App\Actions\PreferenceNumbers\CreatePreferenceNumberAction;

class CreateNumberAction
{
    use AsAction, RedirectResponseBack;

    /**
     * @param CreateOrUpdateNumberRequest $request
     * @return void
     */
    public function handle(CreateOrUpdateNumberRequest $request): RedirectResponse
    {
        $customer = $request->user()->customer()->find($request->input('customer_id'));

        if(!$customer) {
            return $this->error();
        }

        try {
            DB::beginTransaction();
            $number = $customer->number()->create([
                'number' => $request->input('number')
            ]);
            CreatePreferenceNumberAction::run($number);
            DB::commit();

            return $this->success();
        } catch (\Exception $exception) {
            DB::rollBack();

            return $this->error();
        }
    }
}
