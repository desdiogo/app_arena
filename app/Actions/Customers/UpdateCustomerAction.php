<?php

namespace App\Actions\Customers;

use App\Traits\RedirectResponseBack;
use Illuminate\Http\RedirectResponse;
use Lorisleiva\Actions\Concerns\AsAction;
use App\Http\Requests\Customers\CreateOrUpdateCustomerRequest;

class UpdateCustomerAction
{
    use AsAction, RedirectResponseBack;

    public function handle(CreateOrUpdateCustomerRequest $request, int $id): RedirectResponse
    {
        $customer = $request->user()->customer()->find($id);

        if(!$customer) {
            return $this->error();
        }

        $customer->update($request->all());
        return $this->success();
    }
}
