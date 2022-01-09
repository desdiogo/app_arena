<?php

namespace App\Actions\Numbers;

use App\Actions\PreferenceNumbers\CreatePreferenceNumberAction;
use App\Http\Requests\Numbers\CreateOrUpdateNumberRequest;
use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Lorisleiva\Actions\Concerns\AsAction;

class CreateNumberAction
{
    use AsAction, RedirectResponseBack;

    /**
     * @param CreateOrUpdateNumberRequest $request
     * @return void
     */
    public function handle(CreateOrUpdateNumberRequest $request): RedirectResponse
    {
        $customer = $request->user()->customer()->find($request->input('id'));

        if(!$customer) {
            return $this->error();
        }

        try {
            DB::beginTransaction();
            $number = $customer->number()->create($request->all());
            CreatePreferenceNumberAction::run($number);
            DB::commit();

            return $this->success();
        } catch (\Exception $exception) {
            DB::rollBack();

            return $this->error();
        }
    }
}
