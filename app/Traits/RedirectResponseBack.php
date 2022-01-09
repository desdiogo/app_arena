<?php

namespace App\Traits;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

trait RedirectResponseBack
{
    /**
     * General success response message
     *
     * @var string
     */
    protected string $successMessage = 'Procedure performed successfully!';

    /**
     * General error response message
     *
     * @var string
     */
    protected string $errorMessage = 'Oops! There was some internal error.';

    /**
     * Generate response with successfully
     *
     * @param string|null $message
     *
     * @return RedirectResponse
     */
    protected function success(?string $message = null): RedirectResponse
    {
        return Redirect::back()->with('success', $message ?? $this->successMessage);
    }

    /**
     * Generate response with error
     *
     * @param string $index
     * @param string|null $message
     *
     * @return RedirectResponse
     */
    protected function error(string $index = 'error', ?string $message = null): RedirectResponse
    {
        return Redirect::back()->with($index, $message ?? $this->errorMessage);
    }

    /**
     * Get success message
     *
     * @return string
     */
    protected function getSuccessMessage(): string
    {
        return $this->successMessage;
    }

    /**
     * Get error message
     *
     * @return string
     */
    protected function getErrorMessage(): string
    {
        return $this->errorMessage;
    }
}
